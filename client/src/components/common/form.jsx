function CommonForm({ formControls }) {
  return (
    <form action="" className="">
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}></div>
        ))}
        <label className="mb-1">{controlItem.label}</label>
        {
            renderInputByComponentType(controlItem)
        }
      </div>
    </form>
  );
}

export default CommonForm;
