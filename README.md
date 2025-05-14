### Prerequisites
- **Kubectl** installed. Follow this [docs](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/#install-kubectl-on-macos) for installation instructions.
- **Kubernetes** cluster installed and running. It could via via Docker Desktop (preferred), kind or minikube. Follow the Docker Desktop section in this [blog](https://medium.com/@vinoji2005/day-2-setting-up-kubernetes-on-macos-windows-and-ubuntu-0aa72967e901) for installation instructions.
- **Ingress controller** installed and running. It could be **ingress-nginx** controller. See diagram below to follow installation steps and following this [docs](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start) for installation instructions.

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
