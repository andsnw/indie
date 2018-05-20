import moment from 'moment';

Template.entryCard.events({
  'click .update': (e) => {
    e.preventDefault();
    window.open("https://sandbox.qbo.intuit.com/app/expenses", '_blank');

  },
})

Template.entryCard.onCreated(() => {
  Bert.alert('Recorded new expense!', 'success', 'growl-top-right');
});

Template.entryCard.helpers({
  getReadableDate: (date) => {
    return moment(date).format('hh:mma Do MMMM YYYY');
  },

  getAmount: (entry) => {
    return entry['params']['amt-spent']['amount'];
  },

  getDescription: (entry) => {
    return entry['params']['spent-detail'];
  },

  getType: (entry) => {
    return entry['params']['spent-type'];
  },

  getLocation: (entry) => {
    let locationString = '(' + entry['location']['coordinates']['latitude'] + ', ' + entry['location']['coordinates']['longitude'] + ')';
    return locationString;
  },
})
