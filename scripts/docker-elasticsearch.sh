docker run \
    --publish=9200:9200 --publish=9300:9300 \
	-v "$PWD/elasticsearch/data":/usr/share/elasticsearch/data \
	-v "$PWD/elasticsearch/config":/usr/share/elasticsearch/config \
	elasticsearch
