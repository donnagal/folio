

var gallery = new Vue({
  el: '#gallery',
  data: {
    filterAll: '',
    items: [
      { project: 'Slurpee', text: 'Tap of War | Award Judges Landingpage', url: 'http://awardjudges.com.au/slurpeetapofwar/ ', img: '/img/gallery/5.jpg', },
      { project: 'Fed Square', text: 'Award Judges Landingpage', url: 'http://awardjudges.com.au/fedsquare/public/', img: '/img/gallery/1.jpg', },
      { project: 'UNIQLO', text: 'Umood | Award Judges Landingpage', url: 'http://awardjudges.com.au/umood/ ', img: '/img/gallery/8.jpg', },
      { project: 'Kmart', text: 'Stick and Style | Award Judges Landingpage', url: 'http://awardjudges.com.au/stickandstyle/ ', img: '/img/gallery/10.jpg', },
      { project: 'Momatu', text: 'App Website', url: 'https://web.momatu.com/', img: '/img/gallery/2.jpg', },
      { project: 'Carriberrie', text: 'Award Judges Landingpage', url: 'http://awardjudges.com.au/carriberrie/', img: '/img/gallery/3.jpg', },
      { project: 'Village Roadshow', text: 'Tomb Raider | Award Judges Landingpage', url: 'http://awardjudges.com.au/tombraider/ ', img: '/img/gallery/4.jpg', },
      { project: 'Spotify podcasts', text: 'PayPal | Award Judges Landingpage', url: 'http://awardjudges.com.au/paypalpodcast/ ', img: '/img/gallery/11.jpg', },
      { project: 'Cat VR', text: 'Award Judges Landingpage', url: 'http://awardjudges.com.au/catvr/', img: '/img/gallery/6.jpg', },
      { project: 'Qisper', text: 'App Website', url: 'https://qisper.com/ ', img: '/img/gallery/9.jpg', },
  ]
  },
});


new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
     current: 1,
     items: [
      { name: 'Australian Futures', group: 'animation', url: 'https://mailchi.mp/australianfutures/meet-the-perfect-candidate?e=e693eb72a0', img: '/img/gallery/email-9.jpg', },
      { name: 'Klip Studio', group: 'animation', url: 'http://createsend.com/t/y-F919627F298B421F', img: '/img/gallery/email-2.jpg', },
      { name: 'Australia Post', group: 'newsletter', url: 'https://isobarstudio.createsend.com/t/ViewEmail/y/EC271B7BB5B53DBA/C67FD2F38AC4859C/?tx=0&previewAll=1&print=1', img: '/img/gallery/email-8.jpg', },
      { name: 'TAC', group: 'newsletter', url: 'https://isobarstudio.createsend.com/t/ViewEmail/y/19331E05C4D1D312/C67FD2F38AC4859C', img: '/img/gallery/email-10.jpg', },
      { name: 'Racing Victoria', group: 'transactional', url: 'https://isobarstudio.createsend.com/t/ViewEmail/y/91EDA739FC49F3DB/C67FD2F38AC4859C ', img: '/img/gallery/email-7.jpg', },
      { name: 'Isobar', group: 'event', url: 'https://isobaraustralia.createsend1.com/t/ViewEmail/y/5AB925D7BE63AEF6', img: '/img/gallery/email-1.jpg', },
      { name: 'Australia Post Shipster', group: 'carousel', url: 'https://isobarstudio.cmail20.com/t/ViewEmail/y/DC29EEAF1D5B5600/1701EFAE8EC2B1513FEC1D8A50AFD3BD ', img: '/img/gallery/email-3.jpg', },
      { name: 'Holden', group: 'animation', url: 'http://holdenclient.cmail20.com/t/ViewEmail/y/BCF3B5A5D0A09813/DA77E062F9893914B4B1B1F623478121 ', img: '/img/gallery/email-12.jpg', },
      { name: 'Sportsbet', group: 'countdown', url: 'https://isobarstudio.createsend.com/t/ViewEmail/y/560A47D43B55C9E3/C67FD2F38AC4859C', img: '/img/gallery/email-5.jpg', },
      { name: 'Australia Post', group: 'transactional', url: 'https://isobarstudio.createsend.com/t/ViewEmail/y/91EDA739FC49F3DB/C67FD2F38AC4859C ', img: '/img/gallery/email-11.jpg', },
      { name: 'Holden', group: 'animation newsletter', url: 'http://holden.createsend1.com/t/ViewEmail/y/832BDB3F35D4C6DF ', img: '/img/gallery/email-4.jpg', },
      { name: 'UNIQLO', group: 'Promo', url: 'http://uniqlo.createsend1.com/t/ViewEmail/y/61C0A778A94037F3', img: '/img/gallery/email-13.jpg', },
      { name: 'Isobar', group: 'Event', url: 'https://isobaraustralia.createsend1.com/t/ViewEmail/y/DEF3C090ABDAD810', img: '/img/gallery/email-14.jpg', },
      { name: 'Mario Bros ', group: 'gamification', url: 'http://isobarstudio.createsend1.com/t/ViewEmail/y/9A9A72FCC48DD603', img: '/img/gallery/email-6.jpg', },
    ],
    paginate: 100,
    paginate_total: 0,
    search_filter: '',
    status_filter: ''
  },
  methods: {
    setPaginate: function (i) {
      if (this.current == 1) {
        return i < this.paginate;
      }
      else {
        return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
      }
    },
    setStatus: function (status) {
      this.status_filter = status;
      this.$nextTick(function () {
        this.updatePaginate();
      });
    },
    updateCurrent: function (i) {
      this.current = i;
    },
    updatePaginate: function () {
      this.current = 1;
      this.paginate_total = Math.ceil(document.querySelectorAll('tbody tr').length/this.paginate);
    }
  }
});