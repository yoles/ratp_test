PROJECT_NAME=$(shell basename $(shell pwd))
DOCKER_IMAGE=$(PROJECT_NAME):express

# In Repository

## Need a nodejs container to execute this rules
package-json:
	docker run -it --rm -v ${PWD}:/usr/app node:creator sh -c "yarn init -y"

init-sh:
	chmod +x ./init.sh
	./init.sh

build:
	docker build -f Dockerfile.dev -t $(DOCKER_IMAGE) .

run:
	docker run -it --rm -v ${PWD}:/usr/app -p 3080:3080 $(DOCKER_IMAGE)

bash:
	docker run -it --rm -v ${PWD}:/usr/app $(DOCKER_IMAGE) sh

init-install:
	docker run -it --rm -v ${PWD}:/usr/app $(DOCKER_IMAGE) sh -c "$(cmd)"

install-dep:
	docker run -it --rm -v ${PWD}:/usr/app $(DOCKER_IMAGE) sh -c "yarn add $(name)"

permissions:
	sudo chown ${USER}:${USER} ./

start: build run

init: package-json init-sh

eslint:
	@echo yarn eslint --init
