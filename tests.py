from collections import Counter
from itertools import product

def score(a):
 c=Counter(a); n=max(c.values()); return next(i for i in reversed(a) if c[i]==n)

counts=Counter(score(a) for a in product(range(7),repeat=7))
assert len(counts)==7
assert len(set(counts.values()))==1
for i in range(7): assert score([i]*7)==i
assert score([0,0,1,1,2,3,4])==1
print(dict(counts))
