def fnA(n):
    s_ = set(n)
    o = lambda f,z: f-1 in z
    def __s(a,b):
        ss = a
        sss = 1
        while ss+1 in b:
            ss += 1
            sss += 1
        return sss
    __ = 0
    for _ in s_:
        __ = max(__, __s(_,s_)) if not o(_,s_) else __
    return __

from index import lcs as fnB

_ = [
    [100, 4, 200, 1, 3, 2],
    [1, 2, 0, 1],
    [9, 1, 4, 7, 3, -1, 2, 0, 8, 6],
    [5, 2, 99, 100, 3, 4, 1, 98],
    [10, 5, 11, 20, 3, 12, 4, 13],
    [15, 14, 1, 13, 12, 10, 11],
    [1, 3, 5, 7, 9, 2, 4, 6, 8],
    [50, 51, 52, 53, 54, 55, 56],
    [100, 102, 101, 105, 104, 103],
    [5, 5, 3, 1, 2, 4, 6],
    [-1, -2, -3, -4, -5, -6],
    [10, 11, 12, 15, 16, 17, 13, 14, 18],
    [1, 9, 3, 10, 2, 4, 20, 19, 18, 17, 5],
    [100, 101, 102, 1, 2, 3, 4, 0],
    [0, 1, -1, -2, 10, 12, 11, -3, -4],
]

def _v():
    def exit(m): print(m); __import__('sys').exit(0)
    def cErr(i,e,a): print(f"\nInput: {i}\nExpected: {e}\nActual: {a}")
    
    _f = []
    for __ in _:
        fA = fnA(__)
        fB = fnB(__)
        if fB != fA:
            _f.append({'input':__,'expected':fA,'actual':fB})
    
    if _f:
        print(f"\nFound {len(_f)} failing test(s):")
        for f_ in _f:
            cErr(f_['input'], f_['expected'], f_['actual'])
        exit("Tests failed.")
    
    exit("All tests passed!")

if __name__ == "__main__":
    _v()