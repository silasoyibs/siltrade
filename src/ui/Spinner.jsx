function Spinner() {
  return (
    // <div className="flex h-screen items-center justify-center">
    //   <div className="border-primary h-20 w-20 animate-spin rounded-[50%] border-3 border-t-transparent"></div>
    // </div>
    <div className="flex h-screen items-center justify-center">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
