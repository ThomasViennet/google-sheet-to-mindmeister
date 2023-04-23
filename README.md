# GoogleSheetToMindmeister
A function for formatting data to be imported into mindmeister.com

# Input: [[child, parent],...]

```
[['A', ''],//root
['B', 'A'],
['C', 'B'],
['D', 'C'],
['E', 'D'],
['F', 'A']];
```

# Output: indent accepted by mindmeister.com
`[ [ 'A' ],[ ' B' ], [ '  C' ], [ '   D' ], [ '    E' ], [ ' F' ] ]`

# Demo 
https://drive.google.com/file/d/1SwM1XP9aiYLqqsEEilpOHznmU3_BvyvD
