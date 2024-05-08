//import * as md from "./module.js";  //모듈 전체 임포트 이름설정 필요
//import { module, modulea } from "./module.js";  //필요한것만 임포트


//module("module run");
//md.modulea("module run"); 
//md.module("module run"); 

//esModule 임포트
import {movie} from "../promis_await.js";
movie();

import {totalPoint} from "./myarray.js";
let a = totalPoint();
console.log(a);