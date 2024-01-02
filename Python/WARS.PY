import random
suite='H D S C'.split()
ranks='2 3 4 5 6 7 8 9 J Q K A'.split()
x=[i for i in range(0,52)]
class Deck():
    def __init__ (self):
        self.allcards=[]
        for i in suite:
            for x in ranks:
                self.allcards+=[x+i]
class Hand():
    def __init__(self) -> None:
        deck=Deck()
        self.cards=[]
        l=deck.allcards
        while x!=[]:
            a=0
            b=len(x)
            c=random.randrange(a,b)
            self.cards+=[l[c]]
            x.pop(c)
class seperate():
    def __init__(self) -> None:
        self.player=[]
        self.pc=[]
        a=Hand()
        l=a.cards
        for i in range(0,52):
            if i%2==0:
                self.player+=[l[i]]
            else:
                self.pc+=[l[i]]
a=seperate()
player=a.player
pc=a.pc
def game(l1,l2):
    winner=[]
    if len(l1)<len(l2):
        length=len(l1)
    else:
        length=len(l2)
    for i in range (0,length):
        if l1[i]<l2[i]:
            winner+=[['',[l1[i],l2[i]]]]
        elif l1[i]>l2[i]:
            winner+=[[[l2[i],l1[i]]],'']
    return winner
l=game(player,pc)
print(l)
