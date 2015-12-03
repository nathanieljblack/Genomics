library(ggplot2)
library(reshape2)
mutation <- read.csv('/Users/nathanielblack/Dropbox/MIDS/VIZ/ghpages/Genomics/data/clusteredMutationMatrix.csv', header = T)
setwd("/Users/nathanielblack/Dropbox/MIDS/VIZ/ghpages/Genomics/img/heatmaps/")

cols <- colnames(mutation)
popSubset <- c('GBR','FIN','CHS','PUR','CDX','CLM','IBS','PEL','PJL','KHV','GWD','ESN','BEB','MSL','ACB')
mutation <- mutation[mutation$population %in% popSubset,]

#Create an ID variable (Mut column isn't sequential)
mutation['ID'] <- seq(1,1466)
mutation <- mutation[,-1] 
mutation <- mutation[,c(111,1:110)]

#Grab mutation columns
cols <- cols[-c(1,2)]

#Make the dataset long
mutation.m <- melt(mutation, id.vars = c('ID','population'))

#Define colors for heatmap
colorScale <- c("firebrick", "red", "white", "blue", "blueviolet")

#Main Heat Map
mainPlot <- ggplot(mutation.m, aes(variable, ID)) + 
  geom_tile(aes(fill = colorScale[value+3])) + 
  scale_fill_identity(breaks=colorScale) +
  labs(x = "Mutation", y = "People") + 
  scale_x_discrete(expand = c(0, 0)) +
  scale_y_discrete(expand = c(0, 0)) + 
  theme(axis.title=element_text(size=12, family="sans"),
        axis.ticks.x=element_blank(),
        axis.ticks.y=element_blank(),
        axis.text.x=element_blank(),
        axis.text.y=element_blank(),
        panel.border = element_rect(fill='transparent', colour = "black")) 
print(mainPlot)
ggsave("BASE.png", width=5, height=3, units="in", dpi=300)

plotHeatmap <- function(pop, firstPerson, lastPerson){
  heat <- ggplot(mutation.m, aes(variable, ID)) + 
    geom_tile(aes(fill = colorScale[value+3])) + 
    scale_fill_identity(labels=letters[1:5], breaks=colorScale) +
    labs(x = "Mutation", y = "People") + 
    scale_x_discrete(expand = c(0, 0)) +
    scale_y_discrete(expand = c(0, 0)) + 
    theme(text=element_text(size=12, family="sans"),
          axis.ticks.x=element_blank(),
          axis.ticks.y=element_blank(),
          axis.text.x=element_blank(),
          axis.text.y=element_blank(),
          panel.border = element_rect(fill='transparent', colour = "black")) +
    annotate("rect", ymin=firstPerson, ymax=lastPerson, xmin=-Inf, xmax=Inf,alpha=0.5, fill="gray") 
   
  ggsave(heat, file=paste(pop, ".png", sep=""), width=5, height=3, units="in", dpi=300)
}

#Make a plot for each population and save it as an image
#Finds the first and last person for each population to create the highlight bar
for (pop in popSubset)
  {
   temp <- mutation[mutation$population == pop,]
   plotHeatmap(pop, temp$ID[1], temp$ID[length(temp$ID)])
   }


