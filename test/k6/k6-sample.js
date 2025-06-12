import http from "k6/http";

export default function () {
  http.get('http://nginx-service.nginx.svc.cluster.local');
}
   
