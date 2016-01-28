# Git cheat sheet

I dette kurset bruker vi Git for enkelt å kunne oppdatere oppgavene, og for å distribuere dem på en hensiktsmessig måte til maskinen din.
_Du trenger ikke kunne Git_ for å skrive kommandoene vi bruker for å gå til oppgavene, men om du vil ha en liten huskelapp for hva de forskjellige kommandoene vi bruker gjør kan du skrive ut denne.

Anbefalt: [Git-boka](https://git-scm.com/doc) (gratis!)


## Hente ut kildekoden fra GitHub
```
git clone https://github.com/makingwaves/js-workshop-2016.git
cd js-workshop-2016
```
Du har nå klonet repoet (kodelageret) og sjekket ut `master`-branchen.

## Sjekke ut en branch
Oppgavene vi jobber med ligger i forskjellige brancher. Om vi f.eks. skal jobbe med 
"closures" kommer vi antagelig til å hente ut koden slik:
```
gi pull # henter ev. siste endringer fra GitHub, f.eks. endringer i oppgaver
git checkout closures # sjekker ut "closures" branchen
```
Et løsningsforslag vil komme i `closures-lf` branchen.

## Lagre arbeidet ditt
Du må gjerne lagre delarbeidet ditt i en eksisterende branch. 

Slik lagrer du alle endringer du har gjort:
```
git commit -a -m "memoize() function: passes 2 out of 3"
``` 

For å se hva du er i ferd med å lagre kan du skrive `git diff`

## Fjerne alle endringer

Fjerne alle endringer på filer som eksisterer i repoet:
```
git reset --hard
```

Fjerne endringer på filer som kun er lokale (ikke sjekket inn):
```
git clean -f
```

## Legg endringer til siden
Legg dem til siden: `git stash`

Hent dem tilbake: `git stash pop`

