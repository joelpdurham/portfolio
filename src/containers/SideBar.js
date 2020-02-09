import React from 'react';
import { Icon } from '../components/Icon';
import Styles from './SideBar.css';

export const SideBar = () => {

  return (
    <div className={Styles.sideBar}>
      {/* <h5 style={{ marginBottom: '0px' }}>Stack</h5> */}
      {/* Front End */}
      <Icon name='HTML' url='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png' />
      <Icon name='CSS' url='https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png' />
      <Icon name='Javascript' url='https://clipartart.com/images/javascript-icon-clipart-6.png' />
      <Icon name='React' url='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' /> 
      <Icon name='Redux' url='https://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png' />

      {/* Back End */}
      <Icon name='Node.js' url='https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png' />
      <Icon name='MongoDB' url='https://www.pngkey.com/png/full/383-3838923_open-mongodb-icon.png' />
      <Icon name='PostgreSQL' url='https://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png' />

      {/* TDD */}
      <Icon name='Jest' url='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/5894313931548218185-512.png' />
      <Icon name='Travis CI' url='https://travis-ci.com/images/logos/Tessa-pride.png' />

      {/* Tools */}
      <Icon name='VScode' url='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png' />
      <Icon name='GitHub' url='https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png' />
      <Icon name='Heroku' url='https://image.flaticon.com/icons/png/512/873/873120.png' />
      <Icon name='Postman' url='https://user-images.githubusercontent.com/8083855/44999455-72444280-afce-11e8-9f22-fdd7259c637b.png' />
      <Icon name='Slack' url='https://www.stickpng.com/assets/images/5cb480cd5f1b6d3fbadece79.png' />
      <Icon name='Gimp' url='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1200px-The_GIMP_icon_-_gnome.svg.png' />
    </div>
  );
};
