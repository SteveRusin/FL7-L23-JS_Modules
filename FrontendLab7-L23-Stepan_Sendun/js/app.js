import {buildCalculator} from './interface-module';
import {showResult} from './result-module';
import math from './calculate-module';

buildCalculator();
document.getElementById('buttons').addEventListener('click', function(event){
    showResult(event, math.addition, math.subtraction, math.division, math.multiplication);
});
