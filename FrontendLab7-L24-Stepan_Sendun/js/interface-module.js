export function buildCalculator() {
    let container = document.getElementById('container');
    container.innerHTML = `<input type="number" class="form-control"/> <br/>
                           <input type="number" class="form-control"/><br/>
                           <div id="buttons">
                           <button class="btn btn-primary">+</button>
                           <button class="btn btn-primary">-</button>
                           <button class="btn btn-primary">:</button>
                           <button class="btn btn-primary">*</button>
                           </div>
                           <br>
                           <div id="result"></div>`
}
