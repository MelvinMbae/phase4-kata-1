def sort_by_length(arr):
    return sorted(arr,key=len)
arr = ["Telescopes", "Glasses", "Eyes", "Monocles"]
print(sort_by_length(arr))
