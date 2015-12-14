library(ggplot2)
library(reshape2)
library(grid)

mutation <- read.csv('/Users/nathanielblack/Dropbox/MIDS/VIZ/ghpages/Genomics/data/clusteredMutationMatrix.csv', header = T)
setwd("/Users/nathanielblack/Dropbox/MIDS/VIZ/ghpages/Genomics/img/heatmaps2/")

#Subset populations from Viz 2
cols <- colnames(mutation)
popSubset <- c('GBR','FIN','CHS','PUR','CDX','CLM','IBS','PEL','PJL','KHV','GWD','ESN','BEB','MSL','ACB')
mutation <- mutation[mutation$population %in% popSubset,]

#Create order for populations
mutation$population <- factor(mutation$population, levels = c('GBR',
                                                              'FIN',
                                                              'IBS', 
                                                              'CHS',
                                                              'CDX',
                                                              'KHV',
                                                              'BEB',
                                                              'PUR',
                                                              'CLM',
                                                              'PEL',
                                                              'PJL',
                                                              'GWD',
                                                              'ESN',
                                                              'MSL',
                                                              'ACB'))
mutation <- mutation[order(mutation$population),]

#Create an ID variable (Mut column isn't sequential)
mutation['ID'] <- seq(1,1466)
mutation <- mutation[,-1] 
mutation <- mutation[,c(111,1:110)]

#Grab mutation columns
cols <- cols[-c(1,2)]

#Make the dataset long
mutation.m <- melt(mutation, id.vars = c('ID','population'))

#Define colors for heatmap
#colorScale <- c("firebrick", "red", "white", "blue", "blueviolet")
colorScale <- c("firebrick", "coral", "white", "lightskyblue", "navy")
#Main Heat Map
mainPlot <- ggplot(mutation.m, aes(variable, ID)) + 
  geom_tile(aes(fill = colorScale[value+3])) + 
  scale_fill_identity(breaks=colorScale, guide = guide_legend(title = "Mutation Severity"), labels = c("Pathogenic",
                                                                      "Likely Pathogenic",
                                                                      "No Mutation",
                                                                      "Likely Benign",
                                                                      "Benign")) +
  labs(x = "Mutation", y = "People") + 
  scale_x_discrete(expand = c(0, 0)) +
  scale_y_discrete(expand = c(0, 0)) + 
  theme(axis.title=element_text(size=8, family="sans"),
        legend.text=element_text(size=6, family="sans"),
        legend.title=element_text(size=6, family="sans"),
        legend.key.size = unit(0.25, "cm"),
        axis.ticks.x=element_blank(),
        axis.ticks.y=element_blank(),
        axis.text.x=element_blank(),
        axis.text.y=element_blank(),
        panel.border = element_rect(fill='transparent', colour = "black")) 
print(mainPlot)

#temp <- mutation[mutation$population %in% c('GWD','ESN','MSL','ACB'),]
#african 1074, 1466
#c('GWD','ESN','MSL','ACB')
#
#Europe 1, 298
#c('GBR','FIN','IBS')
#
#Asian 299, 692
#c('CHS','CDX','KHV', 'BEB')
#
#Latin American 693, 977
#c('PUR','CLM','PEL')
#
#Middle Eastern 978, 1073
#c('PJL')

#Manually add the splits for groups
countryPlot <- mainPlot + 
            geom_hline(aes(yintercept=298), color='lightgray', alpha=0.5, size=0.5)+
            annotate("text", x = 'chrMT.15314.A', y = 150, label = "European", alpha=0.2, size=2.5) +
            geom_hline(aes(yintercept=692), color='lightgray', alpha=0.5, size=0.5)+
            annotate("text", x = 'chrMT.15314.A', y = 496, label = "Asian", alpha=0.2, size=2.5) +
            geom_hline(aes(yintercept=977), color='lightgray', alpha=0.5, size=0.5)+
            annotate("text", x = 'chrMT.15314.A', y = 835, label = "Latin American", alpha=0.2, size=2.5)+
            geom_hline(aes(yintercept=1073), color='lightgray', alpha=0.5, size=0.5)+
            annotate("text", x = 'chrMT.15314.A', y = 1026, label = "Middle East", alpha=0.2, size=2.5) +
            annotate("text", x = 'chrMT.15314.A', y = 1270, label = "African", alpha=0.2, size=2.5)
print(countryPlot)
ggsave("BASE.png", plot=countryPlot, width=5, height=3, units="in", dpi=300)

#Make a plot for each population and save it as an image
#Finds the first and last person for each population to create the highlight bar
for (pop in popSubset)
{
  temp <- mutation[mutation$population == pop,]
  subplt <- countryPlot + 
    annotate("rect", ymin=temp$ID[1], ymax=temp$ID[length(temp$ID)], xmin=-Inf, xmax=Inf,alpha=0.5, fill="gray")  
  
  ggsave(subplt, file=paste(pop, ".png", sep=""), width=5, height=3, units="in", dpi=300)
}
