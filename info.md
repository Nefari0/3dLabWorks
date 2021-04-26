This app is for sharing 3d models (.stl files) and other assets amongst users for use in
3d printing and collaboration on development in a social networking style environment

Users can upload and download files to a cloud (most likely firestore) to share with other users. 

Users can find other talented users to for discussions with, and even colaborate on projects.



Will use:

three
react-three-renderer
react-three-renderer-objects

redux to store user information and messages(15 points)

user page, public forum, group page, asset explorer will all use routes

entire site will be responsive (10 points)

user page and group page will use hooks (5 points)

User authentication (10 points)

Firestore to store user assets (10 points)

Nodemailer to send users notifications (10 points)

Sass (10 points)

icons

calculater`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>

chat-alt2

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
</svg>

firebase init

firebase deploy --only storage

''
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write:   --->if request.auth!=null;<--this is removed
    }
  }
}

''

yarn add firebase 

<!-- ----non secure firebase rules------- -->
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2021, 2, 24);
    }
  }
}

<!-- users -->
user1 - madmax
pass : zoozoo
email : supercar@yahoo.com
first name : mike
user_id : 30

user2 - jadude
pass : s3cretw0rd
email : digitalfire@msn.com
first name : charles
user_id : 34

user3 - captr0ss
pass : y3sf4n
email : fromheck
first name : benito
user_id : 35

<!-- sudo users with real profiles -->

username: cr3ality
password: passw0rd
email: perterquill@gmail.com
firstname: Peter

usernam: mod3lmax
password: s3cur1ty
email: samual@yahoo.com
firstname: Samual

username: gm0de
password: goodpass
email: cheryl@msn.com
firstname: Cheryl

username: steammachine
password: password
email: fred@aol.com
firstname: Fred