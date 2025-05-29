import http from "k6/http";

export default function () {
  http.get('http://nginx-service.default.svc.cluster.local');
}
   
