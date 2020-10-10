# Quran For Memorization

Leasure-time learning project focus on creating digital quran for visual type person to memorize Al-Quran

## Deployed in: Containerized docker images on Google Cloud. [https://qfm-api-jg7quhb4cq-as.a.run.app]

### Introduction
This project idea came up to my mind as I am on the proccess memorizing Al-Quran by becoming a member of community group of Memorizers [STUAH]. STUAH is a community of Quran Memorizer from the Indonesia who wants to expand the sum of people who can memorize and recite Quran. The community created by Ustadz Adi Hidayat Lc., M.A.

The idea is to help the person who want to memorize the quran to become truly memorize and capture the quran. Knowing where is the ayah placed, the meaning and order of the ayah. By giving the vizualitation of the pages on the quran without giving the exact ayah. Just the divider of ayah to visualize where the ayah is in the page.

### Project History
- Comes up with an idea to create web Apps
- Learning MongoDB: Creating clusters, learn NoSQL and JSON datatypes. Read MongoDB Documentation
- Learning Docker: Kuberneters and Swarms
- Creating Design of Page using HTML and CSS
- Register and Learning how to deploy containerized images to Google Cloud
- ExpressJS with NodeJS
- ....

### Features
 - [x] Visualization of quran in pages
 - [x] Adding a onclick detail on the ayah divider to show the ayah
 - [x] Your requests ?
 
### Data Sources
- [own-data] Coordinates of the divider on pages. Stored as JSON and NoSQL in MongoDB. Still building the data as for now its just merely the first Juz of Quran. Hope will get the contributor soon to fill the rest of the pages.
- [api.alquran.cloud] (https://api.alquran.cloud) = Quran, Meta Verses.

### Available Commands
- `npm start` = run server.

### Notes as steps on GCloud Deployment [command]
- Setting to the specific or current projects:
> gcloud config set project quran-memorization
- Build docker image:
> docker build -t qfm-api .
- Tag the Docker image:
> docker tag qfm-api gcr.io/quran-for-memorization/qfm-api:1.0.0
- Push the image to Container Registry
> docker push gcr.io/quran-for-memorization/qfm-api:1.0.0
- Pull the image to Container Registry
> docker pull gcr.io/quran-for-memorization/qfm-api:1.0.0
- Enable Cloud Build API
> gcloud services enable cloudbuild.googleapis.com
- Start Build process
> gcloud builds submit --tag gcr.io/quran-for-memorization/qfm-api:1.0.0 .
- Deploy the application
> gcloud run deploy --image=gcr.io/quran-for-memorization/qfm-api:1.0.0 --platform managed 
- ForceDelete the image registry with specifig tags
> gcloud container images delete gcr.io/quran-for-memorization/qfm-api:1.0.0 --force-delete-tags


### LICENSE
MIT

## Support Me

