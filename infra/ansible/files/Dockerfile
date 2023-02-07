FROM satantime/puppeteer-node:14

RUN useradd -ms /bin/bash raccoon

RUN mkdir -p /autocheck && chown raccoon:raccoon -R /autocheck && \
    mkdir -p /tmp/files && chown raccoon:raccoon -R /tmp/files
USER raccoon
WORKDIR /autocheck
COPY package /autocheck

CMD ["bash", "-c", "node node_modules/@htmlacademy/checker/bin/serve-checks.js"]
