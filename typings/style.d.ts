// https://github.com/zeit/styled-jsx/issues/90

import "react";

declare module "react" {
  // tslint:disable-next-line:interface-name
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
