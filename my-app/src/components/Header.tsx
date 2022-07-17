import { styled } from '@mui/system';
import sx from '@mui/system/sx';

const MyThemeComponent = styled('div')(
  sx({
    color: 'black',
    backgroundColor: 'yellow',
    m: 5,
    padding: 4,
    borderRadius: 1,
  }),
);

type Props = {
  children?: JSX.Element;
};

/**
 * Takes children prop that allows consumer of this component to render custom props
 * @param props : children
 * @returns
 */

const Header = (props: Props) => (
  <MyThemeComponent>{props.children}</MyThemeComponent>
);

export default Header;
