import moment from 'moment';

export default (text) => {
  const seconds = moment.duration(text).seconds();
  const minutes = moment.duration(text).minutes();
  const hours = moment.duration(text).hours();
  if (!text) {
    return null;
  } if (text < 1000) {
    return `${text}ms`;
  } if (text < 60000) {
    return `${seconds}s`;
  } if (text < 3600000) {
    return `${minutes}m ${seconds}s`;
  } if (text < 86400000) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  return moment.duration(text).humanize();
};
