import './App.css';

function App() {
  return (
    <div className='w-100 vh-100 main position-absolute'>
      <div className='d-flex align-items-center w-100 vh-100 justify-content-center '>
        <div className='flex-column text-center'>
          <h1 className='text-light display-1 heading-font'>Image2Text <span className='h5 border rounded-2 py-1 px-2 btn btn-lg btn-danger' >V1.0.0</span></h1>
          <figure>
            <blockquote class="blockquote">
              <p className='text-light opacity-75'>Seemlessly convert multiple images to text</p>
            </blockquote>
          </figure>
          <div className="progress my-4" role="progressbar" aria-label="Danger striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar  progress-bar bg-danger w-50">50% complete</div>
          </div>
          <div class="alert alert-success" role="alert">
            Total file processed: 50/525
          </div>

          <div class="vstack gap-3 mt-2">

            <input type='file' className='form-control disabled w-80' name="pic" accept="image/*" multiple='multiple' />

          </div>
          <div class="hstack gap-2 mt-2">
            <button type="button" class="btn btn-success w-100 disabled">Start process</button>
            <button type="button" class="btn btn-outline-danger">Stop</button></div>


        </div>



      </div>
    </div>
  );
}

export default App;
