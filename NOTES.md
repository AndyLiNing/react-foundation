### Build docker image:
```
docker image build -t react-foundation:latest .
```
### List all the docker images on local
```
docker images
```
### Push an image to docker repository
```angular2html
1, Login docker 
2, Go to docker repositories and click on Create repository
3, Flip back to react-foundation project, In project terminal type "docker login"
4, Tag the project image
    'docker image tag react-foundation andyningli/react-foundation'`'
5, Push image to docker repository
    'docker push andyningli/react-foundation'

```
###  Tag a docker image as following
```
docker image tag react-foundation(SOURCE_IMAGE[:TAG]) andyningli/react-foundation(TARGET_IMAGE[:TAG])
```

# Main takeaways 
```angular2html
- K8s is a system to deploy containerized apps
- Nodes are individual machines (or VMs)
- Masters are machines(VMs) with a serial of programs to manage nodes
- K8s does not build images, it gets the images from somewhere else
- Masters decide where to run each container
- To update something, we update the desired state of the master with a config file
- The Master works constantly to meet the desired state
```
# Questions: 
 #### 1, How to let the deployment pull the latest version of image, in order to create the latest version App ?
```angular2html
1, Manually delete older version pods to let k8s to recreate the pods(hopefully, pull the latest version of app image)
2, Use different tags to each new version of images
3, Use imperative command to update image version that the deployment should use

   'kubectl set image deployment/react-foundation-deployment react-foundation-app=andyningli/react-foundation:fixed'
    kubectl set propertyToUpdate typeOfObject/nameOfObject containerName=newVersionOfImage
```
