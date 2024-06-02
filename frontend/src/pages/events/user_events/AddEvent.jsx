import { useGetAllTagsQuery } from "../../../redux/api/tagApiSlice.js";
import {
  useCreateEventMutation,
  useUploadImageEventMutation,
} from "../../../redux/api/eventApiSlice.js";
import { asset } from "../../../assets/asset.js";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AddEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: tags } = useGetAllTagsQuery();

  const [startDate, setStartDate] = useState("");
  const [stopDate, setStopDate] = useState("");
  const [imageEvent, setImageEvent] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [url, setUrl] = useState("");

  const date = new Date;

  //! function check date entered by user
  const checkDate = (first, second) => {
    const dateDebut = new Date(first);
    const dateFin = new Date(second);
    
    // check if the date is valid
    if (isNaN(dateDebut.getTime())) {
      setStartDate("");
      return toast.error("Invalid start date time!");
    }
    if (isNaN(dateFin.getTime())) {
      setStopDate("");
      return toast.error("Invalid end date time!");
    }
    // check if the date is not from the past
    if (
      dateDebut.getFullYear() < date.getFullYear() ||
      dateFin.getFullYear() < date.getFullYear()
    ) {
      return toast.error("Date must be in the future");
    }
    // check if the start date is smaller than the end date
    if (dateDebut.getTime() <= dateFin.getTime()) {
      // console.log((dateDebut.getTime() +" | "+ dateFin.getTime()))
      return toast.error("The end date must be greater than the start date");
    }
  };

  // function to add image event
  const [uploadImageEvent] = useUploadImageEventMutation();
  const addImageEvent = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadImageEvent(formData).unwrap();
      setImageEvent(res.file);
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  // function to handle add the event
  const [createEvent] = useCreateEventMutation();
  const handleAddEvent = async () => {
    if(startDate || stopDate){
      checkDate(startDate, stopDate);
    }
    try {
      const res = await createEvent({
        id,
        url,
        thumbnail: imageEvent,
        personOfInterests: [user._id],
        title,
        description,
        subTitle,
        startDate,
        stopDate,
        tag,
      }).unwrap();
      console.l
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <>
      <h2 className="text-2xl p-4 font-medium">Ajouter un event </h2>
      <hr />
      <div className="pb-6 pt-3 max-lg:px-0 max-md:text-sm w-full h-[73vh]">
        <div className="h-full w-full flex flex-col">
          {/* top side */}
          <div className="h-3/5 w-full flex gap-3">
            {/* side of inputs (titre, description...) */}
            <div className="w-1/2 h-full flex flex-col pl-4">
              <div className="flex gap-2">
                <div className="flex flex-col w-3/4 mb-2">
                  <label className="text-gray-500 font-medium">titre *</label>
                  <input
                    className="bg-gray-50 p-1 px-2 rounded-sm focus:outline-primary-color"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="titre de l'event"
                  />
                </div>
                <div className="flex flex-col mb-2 w-1/4">
                  <label className="text-gray-500 font-medium">event id *</label>
                  <input
                    className="bg-gray-50 p-1 px-2 rounded-sm focus:outline-primary-color"
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID de trois chiffres"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <label className="text-gray-500 font-medium">
                  deuxiéme titre *
                </label>
                <input
                  className="bg-gray-50 p-1 px-2 rounded-sm focus:outline-primary-color"
                  type="text"
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                  placeholder="deauxiéme titre de l'event"
                />
              </div>

              <div className="flex flex-col mb-2">
                <label className="text-gray-500 font-medium">
                  description *
                </label>
                <textarea
                  className="bg-gray-50 p-1 px-2 rounded-sm focus:outline-primary-color resize-none"
                  rows={4}
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="description de l'event"
                />
              </div>

              <div className="flex flex-col mb-2">
                <label className="text-gray-500 font-medium">catégory *</label>
                <select
                  name=""
                  id=""
                  className="bg-gray-50 p-1 px-2 rounded-sm focus:outline-primary-color"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                >
                  <option value="" defaultValue={""} disabled>
                    --selectionner categoié--
                  </option>
                  {tags?.map((tag) => (
                    <option key={tag._id} value={tag._id}>
                      {tag.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* side of image */}
            <div className="w-1/2 h-full flex flex-col gap-4 pr-4 ">
              <img
                src={imageEvent ? imageEvent : asset.default_image}
                className="h-[80%] object-cover border"
                alt="thumbnail"
              />
              <input type="file" id="img" hidden onChange={addImageEvent} />
              <label
                htmlFor="img"
                className="bg-black text-center cursor-pointer text-white p-1 px-2 rounded-sm "
              >
                selectioner une image
              </label>
            </div>
          </div>

          {/* bottom side */}
          <div className="h-2/5 w-full flex flex-col px-4">
            <div className="flex flex-col mb-2">
              <label className="text-gray-500 font-medium">
                date debut de l{"'"}event *
              </label>
              <input
                className="bg-gray-50 p-1 px-2 rounded-sm focus:outline-primary-color"
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="text-gray-500 font-medium">
                date fin de l{"'"}event *
              </label>
              <input
                className="bg-gray-50 p-1 px-2 rounded-sm focus:outline-primary-color"
                type="datetime-local"
                value={stopDate}
                onChange={(e) => setStopDate(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="text-gray-500 font-medium">
                lien pour le vidéo *
              </label>
              <input
                className="bg-gray-50 p-1 px-2 rounded-sm focus:outline-primary-color"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="lien du vidéo pour l'event"
              />
            </div>
          </div>

          {/* button to add the event */}
          <button
            className="border bg-primary-color text-white p-2 mx-4"
            onClick={handleAddEvent}
          >
            ajouter event
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
