

def findPair(arr, n):
    print arr, n
    i=0
    j=1
    size=len(arr)
    print size
    while i< size and j<size:
        if i!=j and arr[j]-arr[i]==n:
            print True
        elif arr[j] - arr[i]<n:
            j+=1
        else:
            i+=1
    print "No pair found"
    return False



arr = [5, 20, 3, 2, 50, 80] 
n = 78
findPair(sorted(arr), n) 
