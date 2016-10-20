import React from 'react';
import axios from 'axios';
import preAxios from 'hocs/pre-axios';
import { Progress } from 'antd';

import Display from './Display';

function gitHubInfo(data) {
  return (
    <div>
      <h4><a rel="noopener noreferrer" target="_blank" href={data.html_url}>{data.name}</a></h4>
      <pre>{data.description}</pre>
    </div>
  );
}

function buildInfo(fullname) {
  return (
    <p><a title="travis build status" rel="noopener noreferrer" target="_blank" href={`https://travis-ci.org/${fullname}`}><img src={`https://travis-ci.org/${fullname}.svg?branch=master`} alt="build status" /></a></p>
  );
}

function dependencyInfo(fullname) {
  return (
    <div>
      <p><a title="dependency status" rel="noopener noreferrer" target="_blank" href={`https://david-dm.org/${fullname}`}><img src={`https://david-dm.org/${fullname}/status.svg`} alt="dependencies" /></a></p>
      <p><a title="devDependencies status" rel="noopener noreferrer" target="_blank" href={`https://david-dm.org/${fullname}?type=dev`}><img src={`https://david-dm.org/${fullname}/dev-status.svg`} alt="devDependencies" /></a></p>
    </div>
  );
}

function formatScore(score) {
  return +(score * 100).toFixed(0);
}

function npmsInfo(detail) {
  return (
    <div className="npmsinfo">
      <div className="npmsscroe">
        <Progress title="Quality" type="circle" percent={formatScore(detail.quality)} width={60} />
        <span className="caption">Quality</span>
      </div>
      <div className="npmsscroe">
        <Progress title="Popularity" type="circle" percent={formatScore(detail.popularity)} width={60} />
        <span className="caption">Popularity</span>
      </div>
      <div className="npmsscroe">
        <Progress title="Maintenance" type="circle" percent={formatScore(detail.maintenance)} width={60} />
        <span className="caption">Maintenance</span>
      </div>
    </div>
  );
}

function Project({ data }) {
  console.log(data);
  const rst = data[0].data;
  const vst = data[1].data;
  const vv = data[2].data;
  const vvnpm = data[3].data;

  const lines = [
    {
      title: 'react-starter-kit',
      content: (
        <div>
          {gitHubInfo(rst)}
          {buildInfo(rst.full_name)}
          {dependencyInfo(rst.full_name)}
        </div>
      )
    },
    {
      title: 'vue-starter-kit',
      content: (
        <div>
          <div>
            {gitHubInfo(vst)}
            {buildInfo(vst.full_name)}
            {dependencyInfo(vst.full_name)}
          </div>
        </div>
      )
    },
    {
      title: 'vue-vue',
      content: (
        <div>
          {gitHubInfo(vv)}
          {npmsInfo(vvnpm.score.detail)}
        </div>
      )
    }
  ];
  return (
    <Display
      header="Personal Projects"
      lines={lines}
    />
  );
}

Project.propTypes = {
  // from preAxios
  data: React.PropTypes.array.isRequired
};


export default preAxios({
  preload() {
    return Promise.all([
      axios.get('https://api.github.com/repos/xiaofan2406/react-starter-kit'),
      axios.get('https://api.github.com/repos/xiaofan2406/vue-starter-kit'),
      axios.get('https://api.github.com/repos/xiaofan2406/vue-vue'),
      axios.get('https://api.npms.io/v2/package/vue-vue')
    ]);
  }
})(Project);
