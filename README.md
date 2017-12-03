# BlogExercise

BlogExercise of  FrontEndMaster-kurssin RESTful Web Services and Java -osuuden
harjoitustyö. Tässä tehtävässä on toteutettu REST-rajapinta Spring Bootilla.

Tehtävänä oli toteuttaa blogisivusto. Sivulle voidaan lisätä uusia blogeja
ja kommentoida niitä. Superuser-moodissa blogeja voidaan myös poistaa. 

Toteutus on toistaiseksi hyvin vajavainen
(= ei mitään toimivaa toiminnallisuutta).

Ohjelma koostuu käyttöliittymästä, jossa näytetään blogit, jossa niitä voi
lisätä, kommentoida ja poistaa, sekä taustaohjelmasta, joka tallettaa
blogit ja kommentit tietokantaa ja pyydettäessä Rest-rajapinnan kautta
palauttaa ne käyttöliittymälle. Rest-rajapinnan ja käyttöliittymän
välissä on NodeJs:llä toteutettu proxy, joka välittää käyttöliittymältä
tulevat rest-pyynnöt rest-palvelimelle ja käsittelee muut http-pyynnöt itse.

## Näin pääset alkuun

Asenna tarvittavat ohjelmat ja seuraa asennusohjeita.

### Tarvittavat ohjelmat

maven, git, node, npm, webpack ohjelmien asentamiseen ja ajamiseen.

### Asennus

Hae tiedostot Githubista:

1) git clone https://github.com/kartsa007/BlogExercise.git

Lopullinen asennus on tarkoitus automatisoida niin, että
yhdellä komennolla saadaan asennus tehtyä. Toteutus on
toistaiseksi tekemättä.

## Kuvaus tiedostoista


## Tekijä

Kari Heinonen

## Lisenssi

MIT License
