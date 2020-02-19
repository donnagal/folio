

var gallery = new Vue({
  el: '#gallery',
  data: {
    filterAll: '',
    items: [
      { project: 'Tap of War', text: 'Slurpee | Award Judges Landingpage', url: 'http://awardjudges.com.au/slurpeetapofwar/ ', img: '/img/gallery/5.jpg', },
      { project: 'Fed Square', text: 'Award Judges Landingpage', url: 'http://awardjudges.com.au/fedsquare/public/', img: '/img/gallery/1.jpg', },
      { project: 'UNIQLO Australia', text: 'Umood | Award Judges Landingpage', url: 'http://awardjudges.com.au/umood/ ', img: '/img/gallery/8.jpg', },
      { project: 'Kmart', text: 'Stick and Style | Award Judges Landingpage', url: 'http://awardjudges.com.au/stickandstyle/ ', img: '/img/gallery/10.jpg', },
      { project: 'Momatu', text: 'App Website', url: 'https://web.momatu.com/', img: '/img/gallery/2.jpg', },
      { project: 'Carriberrie', text: 'Award Judges Landingpage', url: 'http://awardjudges.com.au/carriberrie/', img: '/img/gallery/3.jpg', },
      { project: 'Village Roadshow', text: 'Tomb Raider | Award Judges Landingpage', url: 'http://awardjudges.com.au/tombraider/ ', img: '/img/gallery/4.jpg', },
      { project: 'Spotify podcasts', text: 'PayPal | Award Judges Landingpage', url: 'http://awardjudges.com.au/paypalpodcast/ ', img: '/img/gallery/11.jpg', },
      { project: 'Cat VR', text: 'Award Judges Landingpage', url: 'http://awardjudges.com.au/catvr/', img: '/img/gallery/6.jpg', },
      { project: 'Brainbox', text: 'Website', url: 'http://danbrainbox.com.au/', img: '/img/gallery/7.jpg', },
      { project: 'Qisper', text: 'App Website', url: 'https://qisper.com/ ', img: '/img/gallery/9.jpg', },
  ]
  },
});


var emails = new Vue({
  el: '#gallery-emails',
  data: {
    filterAll: '',
    items: [
      { project: 'Australian Futures', text: 'The Perfect Candidate', url: 'https://mailchi.mp/australianfutures/meet-the-perfect-candidate?e=e693eb72a0', img: '/img/gallery/email-9.jpg', },
      { project: 'Klip Studio', text: 'Kinetic Email', url: 'http://createsend.com/t/y-F919627F298B421F', img: '/img/gallery/email-2.jpg', },
      { project: 'Australia Post', text: 'Building Business Newsletter', url: 'https://isobarstudio.createsend.com/t/ViewEmail/y/EC271B7BB5B53DBA/C67FD2F38AC4859C/?tx=0&previewAll=1&print=1', img: '/img/gallery/email-8.jpg', },
      { project: 'TAC', text: 'Newsletter', url: 'https://isobarstudio.createsend.com/t/ViewEmail/y/19331E05C4D1D312/C67FD2F38AC4859C', img: '/img/gallery/email-10.jpg', },
      { project: 'Racing Victoria', text: 'Email Template', url: 'https://isobarstudio.createsend.com/t/ViewEmail/y/91EDA739FC49F3DB/C67FD2F38AC4859C ', img: '/img/gallery/email-7.jpg', },
      { project: 'Isobar', text: 'Event Eamil', url: 'https://isobaraustralia.createsend1.com/t/ViewEmail/y/5AB925D7BE63AEF6', img: '/img/gallery/email-1.jpg', },
      { project: 'Australia Post Shipster', text: 'Kinetic Email Carousel', url: 'https://isobarstudio.cmail20.com/t/ViewEmail/y/DC29EEAF1D5B5600/1701EFAE8EC2B1513FEC1D8A50AFD3BD ', img: '/img/gallery/email-3.jpg', },
      { project: 'Holden', text: 'Kinetic Email Falling emojis ', url: 'http://holdenclient.cmail20.com/t/ViewEmail/y/BCF3B5A5D0A09813/DA77E062F9893914B4B1B1F623478121 ', img: '/img/gallery/email-4.jpg', },
      { project: 'Sportsbet', text: 'Template Countdown', url: 'http://isobaraustralia.createsend1.com/t/ViewEmail/y/71CE28F3F8F659A7', img: '/img/gallery/email-5.jpg', },
      { project: 'Mario Bros ', text: 'Experiential Kinetic Email Game', url: 'http://isobarstudio.createsend1.com/t/ViewEmail/y/9A9A72FCC48DD603', img: '/img/gallery/email-6.jpg', },
  ]
  },
});
