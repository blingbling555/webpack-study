import { helloworld } from './helloworld';
import {testCommon} from "../common/testCommon";
if(module.hot)
{
    module.hot.accept();
}
console.log(testCommon())
document.write(helloworld() + '人之初');