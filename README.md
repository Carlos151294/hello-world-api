### Prerequisites
- **Kubernetes** cluster installed and running. It could via via Docker Desktop (preferred), kind or minikube.
- **Ingress controller** installed and running. It could be **ingress-nginx** controller. See diagram below to follow installation steps.

### Run locally
You need to be logined in sucessfully to docker hub to be able to apply the kubernetes files to the cluster.
```
docker login
```

Apply k8s configuration files contained in `k8s` folder
```
kubectl apply -f k8s
```

Go to `localhost` and you should see the app running.

### Architecture Overview
<img width="697" alt="Screenshot 2025-05-13 at 10 47 46 a m" src="https://github.com/user-attachments/assets/59fabd4b-cf08-4611-947e-add02dc8180a" />
