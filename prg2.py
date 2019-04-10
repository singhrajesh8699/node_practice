

def maxSell(arr):
    i=0
    j=1
    size=len(arr)
    max=0
    stockBuy=0
    stockSell=1
    while i<size and j<size:
        if arr[j]-arr[i] > max:
            max=arr[j]-arr[i]
            stockBuy=i
            stockSell=j
            j+=1
        else:
            i=j
            j+=1
    print stockBuy, stockSell, max


arr = [100, 180, 260, 310, 40, 535, 695] 
maxSell(arr) 