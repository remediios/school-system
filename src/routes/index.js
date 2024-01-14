import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Photos from '../pages/Photos';
import Students from '../pages/Students';
import Student from '../pages/Student';
import Page404 from '../pages/Page404';

function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Students} isPrivate={false} />
      <MyRoute exact path="/student/:id/edit" component={Student} isPrivate />
      <MyRoute exact path="/student/" component={Student} isPrivate />
      <MyRoute exact path="/photos/:id" component={Photos} isPrivate />
      <MyRoute exact path="/sign-in" component={Login} isPrivate={false} />
      <MyRoute exact path="/sign-up" component={Register} isPrivate={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

export default Routes;
