import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwamVfdXNlciI6ZmFsc2UsImluc3RhbmNpYSI6InNnIiwiaWRfdXN1YXJpbyI6bnVsbCwiaWRfb3JnYW9fanVsZ2Fkb3JfY29sZWdpYWRvIjpudWxsLCJpZF9vcmdhb19qdWxnYWRvciI6bnVsbCwiaWRfbG9jYWxpemFjYW8iOm51bGwsImlkX3BhcGVsIjpudWxsLCJzdWIiOjE1LCJpc3MiOiJodHRwOi8vcGplYXBpLmludHJhanVzLnRqcm4vYXBpL3YxL3NpZ25pbi9zZyIsImlhdCI6MTYxNDA5NTE0MywiZXhwIjoxNjE0MDk4NzQzLCJuYmYiOjE2MTQwOTUxNDMsImp0aSI6Ik1ZSHNvQnFuM1NVazVyQ2cifQ.IIhpzVrXi4FEk48jsF9Ef5_z99HRHXMZBENGj3hZxo8';

const api = axios.create({
  baseURL: 'http://pjeapi.intrajus.tjrn/api/v1/',
  headers: { Authorization: `bearer ${token}` },
});

export default api;
