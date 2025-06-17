# Testkube vCluster GitOps Testing Pipeline

This repository demonstrates a complete GitOps testing pipeline that creates isolated, ephemeral Kubernetes environments for every pull request using vCluster, ArgoCD, and Testkube.

## 🎯 What This Does

When you open a pull request, the pipeline automatically:
- Creates an isolated vCluster environment
- Deploys your application using GitOps (ArgoCD)
- Runs comprehensive tests (K6 performance + Chainsaw policy validation)
- Collects detailed results and logs
- Cleans up everything when done

## 🏗️ Architecture

- **vCluster**: Lightweight, isolated Kubernetes clusters
- **ArgoCD**: GitOps deployment from PR branches
- **Testkube**: In-cluster test orchestration and execution
- **GitHub Actions**: Pipeline automation and orchestration

## 📁 Repository Structure

```
├── .github/workflows/
│   └── main.yml              # Main GitHub Actions workflow
├── k8s/
│   ├── nginx/                   # Sample nginx application manifests
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── ingress.yaml
│   └── rbac/
│       └── chainsaw-rbac-template.yaml  # RBAC for Chainsaw tests
├── tests/
│   ├── k6/
│   │   ├── performance-test.js  # K6 performance test script
│   │   └── k6-workflow.yaml     # Testkube k6 workflow
│   └── chainsaw/
│       ├── chainsaw-test.yaml   # Chainsaw policy validation
│       └── chainsaw-workflow.yaml  # Testkube Chainsaw workflow
├── TestWorkflows/
│   ├── chainsaw.yaml # Chainsaw TestWorkflow
|   └── k6.yaml  # k6 TestWorkflow
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- GKE cluster (or any Kubernetes cluster)
- ArgoCD installed and configured
- Testkube installed
- `vcluster` CLI tool
- GitHub repository with Actions enabled

### Usage

1. **Fork this repository**
2. **Configure your cluster credentials** in GitHub Secrets:
   - `GKE_PROJECT_ID`
   - `GKE_CLUSTER_NAME` 
   - `GKE_ZONE`
   - `GCP_SA_KEY`
3. **Update ArgoCD configuration** in the workflow to match your setup
4. **Open a pull request** and watch the magic happen!

The pipeline will automatically create an isolated environment, deploy the nginx app, run tests, and clean up.

## 🧪 Test Workflows

- **K6 Performance**: Tests application performance under load (10 concurrent users, 30s duration)
- **Chainsaw Policy**: Validates Kubernetes resources against best practices and policies

## 📊 What You Get

- ✅ Complete isolation per PR
- ✅ Production-like GitOps deployment
- ✅ Comprehensive test results and logs
- ✅ Automatic cleanup and resource management
- ✅ Detailed observability and metrics

## 🔗 Related Content

This repository accompanies the blog post: **"Building Ephemeral Test Environments using vCluster, GitOps and Testkube"**
