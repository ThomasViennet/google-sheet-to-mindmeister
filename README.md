# GoogleSheetToMindmeister
A function for formatting data to be imported into mindmeister.com

# Input: [[child, parent],...]
no parent or parent unknown = root
```
[['A', ''],//no parent = root
['B', 'A'],
['C', 'B'],
['D', 'C'],
['E', 'D'],
['G', 'Z'],//parent unknown = root
['F', 'A']];
```

# Output: indent accepted by mindmeister.com
`[ [ 'A' ],[ ' B' ], [ '  C' ], [ '   D' ], [ '    E' ], [ ' F' ] ]`

# Demo 
https://drive.google.com/file/d/1SwM1XP9aiYLqqsEEilpOHznmU3_BvyvD
