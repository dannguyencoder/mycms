import * as apis from '../apis/apis';

export const showError = (errorInfo) => ({
    type: 'ERROR',
    error: errorInfo
});