# Indonesian Flag Pattern Generator

## Problem Description

Create a script that generates a visual representation of the Indonesian flag using ASCII characters in a bit-pattern design.

### Requirements

1. The flag should be 40 columns wide and 8 rows tall (excluding borders)
2. The flag should consist of two equal horizontal sections:
   - Top half: Red (represented by 'r')
   - Bottom half: White (represented by 'w')
3. The entire flag should be enclosed by a border

### Expected Output

```
---------------------------------------
| r r r r r r r r r r r r r r r r r r |
| r r r r r r r r r r r r r r r r r r |
| r r r r r r r r r r r r r r r r r r |
| r r r r r r r r r r r r r r r r r r |
| w w w w w w w w w w w w w w w w w w |
| w w w w w w w w w w w w w w w w w w |
| w w w w w w w w w w w w w w w w w w |
| w w w w w w w w w w w w w w w w w w |
---------------------------------------
```

### Notes
- Each character in the pattern should be separated by a space
- The border should use '-' for horizontal lines and '|' for vertical lines
- Corner pieces should connect properly