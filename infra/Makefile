#
REPO_SLUG ?= autochecks-htmlcss-1
CLI_TOOL = ansible-playbook
PB_DIR = ansible/playbooks

all: prepare build

rebuild: rmi build

prepare:
	REPO_SLUG=$(REPO_SLUG) $(CLI_TOOL) $(PB_DIR)/prepare-build.yml

build:
	REPO_SLUG=$(REPO_SLUG) $(CLI_TOOL) $(PB_DIR)/build-image.yml

rmi:
	REPO_SLUG=$(REPO_SLUG) $(CLI_TOOL) $(PB_DIR)/remove-image.yml

clean:
	$(CLI_TOOL) $(PB_DIR)/clean.yml
