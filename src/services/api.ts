import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwamVfdXNlciI6ZmFsc2UsImluc3RhbmNpYSI6InNnIiwiaWRfdXN1YXJpbyI6bnVsbCwiaWRfb3JnYW9fanVsZ2Fkb3JfY29sZWdpYWRvIjpudWxsLCJpZF9vcmdhb19qdWxnYWRvciI6bnVsbCwiaWRfbG9jYWxpemFjYW8iOm51bGwsImlkX3BhcGVsIjpudWxsLCJzdWIiOjE1LCJpc3MiOiJodHRwOi8vcGplYXBpLmludHJhanVzLnRqcm4vYXBpL3YxL3NpZ25pbi9zZyIsImlhdCI6MTYwODY1MDA4MCwiZXhwIjoxNjA4NjUzNjgwLCJuYmYiOjE2MDg2NTAwODAsImp0aSI6IkhyQ1B1RXZYYzg0Zk9hMnQifQ.RQhVhxYbQa8KyNkGPcyFf0r2dwIWqAEJSq_MAfOCzWY';

const api = axios.create({
  baseURL: 'http://pjeapi.intrajus.tjrn/api/v1/',
  headers: { Authorization: `bearer ${token}` },
});

export default api;
