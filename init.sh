#!/usr/bin/env sh

make build && \ 
	make init-install cmd="cat requirements/base.txt | xargs yarn add" && \
	make init-install cmd="cat requirements/dev.txt | xargs yarn add" && \
	make permissions
