import pluginId from '../pluginId';

const getAdminUrl = (path = '') => `/plugins/${pluginId}/${path}`;

export default getAdminUrl;
