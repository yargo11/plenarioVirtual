import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwamVfdXNlciI6ZmFsc2UsImluc3RhbmNpYSI6InNnIiwiaWRfdXN1YXJpbyI6bnVsbCwiaWRfb3JnYW9fanVsZ2Fkb3JfY29sZWdpYWRvIjpudWxsLCJpZF9vcmdhb19qdWxnYWRvciI6bnVsbCwiaWRfbG9jYWxpemFjYW8iOm51bGwsImlkX3BhcGVsIjpudWxsLCJzdWIiOjE1LCJpc3MiOiJodHRwOi8vcGplYXBpLmludHJhanVzLnRqcm4vYXBpL3YxL3NpZ25pbi9zZyIsImlhdCI6MTYxMDYzNzI4OCwiZXhwIjoxNjEwNjQwODg4LCJuYmYiOjE2MTA2MzcyODgsImp0aSI6InlWekY1aHFhR2pZVWw2bWUifQ.D1fx2mFiRAUO2htEKBK4sSINx-5KFrL4UDlTzlIW41w';

const api = axios.create({
  baseURL: 'http://pjeapi.intrajus.tjrn/api/v1/',
  headers: { Authorization: `bearer ${token}` },
});

export default api;
