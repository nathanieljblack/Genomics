# script from http://blog.nextgenetics.net/?e=44

import sys, numpy, scipy
import scipy.cluster.hierarchy as hier
import scipy.spatial.distance as dist

#import the data into a native 2d python array
inFile = open(sys.argv[1],'r')
colHeaders=inFile.next()   ## << this is used when the index is on top >>
colHeaders=inFile.next().strip().split()[1:]
rowHeaders = []
dataMatrix = []
for line in inFile: 
    data = line.strip().split('\t')
    #rowHeaders.append(data[1])# had to account for index values in array
    rowHeaders.append(data[0]) # (this is when indexes are on top Transposed df)
    #dataMatrix.append([float(x) for x in data[2:]]) # had to account for index values in array
    dataMatrix.append([float(x) for x in data[1:]]) # had to account for index values in array
    
#convert native python array into a numpy array
dataMatrix = numpy.array(dataMatrix)

#calculate distance matrix and convert to squareform
distanceMatrix = dist.pdist(dataMatrix, 'euclidean')
#distanceSquareMatrix = dist.squareform(distanceMatrix) - see comments in vlog

#calculate linkage matrix
#linkageMatrix = hier.linkage(distanceSquareMatrix)
linkageMatrix = hier.linkage(distanceMatrix)

#get the order of the dendrogram leaves
heatmapOrder = hier.leaves_list(linkageMatrix)

#reorder the data matrix and row headers according to leaves
orderedDataMatrix = dataMatrix[heatmapOrder,:]
rowHeaders = numpy.array(rowHeaders)
orderedRowHeaders = rowHeaders[heatmapOrder]

#output data for visualization in a browser with javascript/d3.js
matrixOutput = []
row = 0
for rowData in orderedDataMatrix:
	col = 0
	rowOutput = []
	for colData in rowData:
		rowOutput.append([colData, row, col])
		col += 1
	matrixOutput.append(rowOutput)
	row += 1

print 'var maxData = ' + str(numpy.amax(dataMatrix)) + ";"
print 'var minData = ' + str(numpy.amin(dataMatrix)) + ";"
print 'var data = ' + str(matrixOutput) + ";"
print 'var cols = ' + str(colHeaders) + ";"
print 'var rows = ' + str([x for x in orderedRowHeaders]) + ";"