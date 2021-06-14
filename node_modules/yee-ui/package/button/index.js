// import XButton from './src/button';

// XButton.install = function(Vue) {
//   Vue.component(XButton.name, XButton);
// };

// export default XButton;
import YButton from './src/button';

YButton.install = (app) => {
    app.component(YButton.name, YButton)
}
export default YButton
