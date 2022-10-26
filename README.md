# BIBLIO-LD

## Introduction

This is a JSON-LD context for mapping [Biblio JSON data](https://biblio.ugent.be/exports/publications.json) into linked data.

## Usage

### Perl

Install [JSONLD](https://metacpan.org/pod/JSONLD). 

Run:

```(bash)
$ jsonld-expand -c biblio.jsonld < example/journalArticle.json > doc.jsonld
$ jsonls-nq < doc.jsonld
_:b0 <http://xmlns.com/foaf/0.1/member> <https://biblio.ugent.be/organization/UGent> .
_:b1 <http://xmlns.com/foaf/0.1/member> <https://biblio.ugent.be/organization/TW06> .
_:b2 <http://xmlns.com/foaf/0.1/member> <https://biblio.ugent.be/organization/CA20> .
_:b3 <http://xmlns.com/foaf/0.1/familyName> "Van de Sompel" .
_:b3 <http://xmlns.com/foaf/0.1/givenName> "Herbert" .
_:b3 <http://xmlns.com/foaf/0.1/name> "Herbert Van de Sompel" .
_:b4 <http://schema.org/pageEnd> "222" .
_:b4 <http://schema.org/pageStart> "195" .
_:b5 <http://xmlns.com/foaf/0.1/member> <https://biblio.ugent.be/organization/TW06> .
_:b6 <http://xmlns.com/foaf/0.1/member> <https://biblio.ugent.be/organization/IMEC> .
<http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> <http://schema.org/identifier> <http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> .
<http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> <http://schema.org/identifier> <http://orcid.org/0000-0002-8596-222X> .
<http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> <http://schema.org/sourceOrganization> _:b1 .
<http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/familyName> "Verborgh" .
<http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/givenName> "Ruben" .
<http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/name> "Ruben Verborgh" .
<http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/publications> <http://biblio.ugent.be/person/002005635351> .
<http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/publications> <http://biblio.ugent.be/person/802000069754> .
<http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> <http://schema.org/identifier> <http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> .
<http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> <http://schema.org/sourceOrganization> _:b0 .
<http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/familyName> "Vander Sande" .
<http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/givenName> "Miel" .
<http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/name> "Miel Vander Sande" .
<http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/publications> <http://biblio.ugent.be/person/000100791484> .
<http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/publications> <http://biblio.ugent.be/person/802001059760> .
<http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/publications> <http://biblio.ugent.be/person/977131571150> .
<http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> <http://schema.org/identifier> <http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> .
<http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> <http://schema.org/identifier> <http://orcid.org/0000-0001-8390-6171> .
<http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> <http://schema.org/sourceOrganization> _:b2 .
<http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/familyName> "Hochstenbach" .
<http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/givenName> "Patrick" .
<http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/name> "Patrick Hochstenbach" .
<http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> <http://xmlns.com/foaf/0.1/publications> <http://biblio.ugent.be/person/801001101817> .
<https://biblio.ugent.be/publication/8545539> <http://lib.ugent.be/biblio/classification> <http://biblio.ugent.be/classification/A1> .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/dc/elements/1.1/date> "2018"^^<http://www.w3.org/2001/XMLSchema#dateTime> .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/dc/elements/1.1/language> "eng" .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/dc/elements/1.1/type> <http://biblio.ugent.be/type/journalArticle> .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/dc/terms/hasPart> <https://biblio.ugent.be/publication/8545539/file/8545541.pdf> .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/ontology/bibo/doi> "10.1108/JD-03-2017-0040" .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/ontology/bibo/issn> "0022-0418" .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/ontology/bibo/issn> "1758-7379" .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/ontology/bibo/issue> "1" .
<https://biblio.ugent.be/publication/8545539> <http://purl.org/ontology/bibo/volume> "74"^^<http://www.w3.org/2001/XMLSchema#integer> .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/abstract> "Purpose - The purpose of this paper is to detail a low-cost, low-maintenance publishing strategy aimed at unlocking the value of Linked Data collections held by libraries, archives and museums (LAMs). Design/methodology/approach - The shortcomings of commonly used Linked Data publishing approaches are identified, and the current lack of substantial collections of Linked Data exposed by LAMs is considered. To improve on the discussed status quo, a novel approach for publishing Linked Data is proposed and demonstrated by means of an archive of DBpedia versions, which is queried in combination with other Linked Data sources. Findings - The authors show that the approach makes publishing Linked Data archives easy and affordable, and supports distributed querying without causing untenable load on the Linked Data sources. Research limitations/implications - The proposed approach significantly lowers the barrier for publishing, maintaining, and making Linked Data collections queryable. As such, it offers the potential to substantially grow the distributed network of queryable Linked Data sources. Because the approach supports querying without causing unacceptable load on the sources, the queryable interfaces are expected to be more reliable, allowing them to become integral building blocks of robust applications that leverage distributed Linked Data sources. Originality/value - The novel publishing strategy significantly lowers the technical and financial barriers that LAMs face when attempting to publish Linked Data collections. The proposed approach yields Linked Data sources that can reliably be queried, paving the way for applications that leverage distributed Linked Data sources through federated querying." .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/author> <http://biblio.ugent.be/person/2C7C943C-F0EE-11E1-A9DE-61C894A0A6B4> .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/author> <http://biblio.ugent.be/person/115DF312-F0EE-11E1-A9DE-61C894A0A6B4> .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/author> <http://biblio.ugent.be/person/F5134A54-F0ED-11E1-A9DE-61C894A0A6B4> .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/author> _:b3 .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/dateCreated> "2018-01-19 10:00:55" .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/dateModified> "2019-06-07 12:28:07" .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/name> "Toward sustainable publishing and querying of distributed linked data archives" .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/pagination> _:b4 .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/sameAs> <http://hdl.handle.net/1854/LU-8545539> .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/sourceOrganization> _:b5 .
<https://biblio.ugent.be/publication/8545539> <http://schema.org/sourceOrganization> _:b6 .
<https://biblio.ugent.be/publication/8545539/file/8545541.pdf> <http://purl.org/dc/elements/1.1/format> "application/pdf" .
<https://biblio.ugent.be/publication/8545539/file/8545541.pdf> <http://purl.org/dc/elements/1.1/type> <http://lib.ugent.be/biblio/fullText> .
<https://biblio.ugent.be/publication/8545539/file/8545541.pdf> <http://purl.org/dc/terms/accessRight> <http://lib.ugent.be/biblio/restricted> .
<https://biblio.ugent.be/publication/8545539/file/8545541.pdf> <http://purl.org/dc/terms/extent> "636179"^^<http://www.w3.org/2001/XMLSchema#integer> .
```
