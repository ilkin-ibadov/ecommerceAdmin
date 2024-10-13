import { useState } from "react";

const Input = ({
  inputName,
  inputValue,
  inputType = "text",
  handleInputChange,
  placeholder,
  error,
  icon = null,
  multiline = false,
  width = "w-auto",
  height,
  padding = "px-4",
  margin = "mb-3",
  title = "",
  titleSize = "text-xs",
  titleColor = "text-zinc-400",
  titleFontWeight = "font-regular",
  fileType = "",
}) => {
  return (
    <div className="flex flex-col">
      {title && (
        <p className={`${titleSize} ${titleColor} ${titleFontWeight} mb-1`}>
          {title}
        </p>
      )}
      <input
        style={{ height: height ? height : 45 }}
        {...(multiline ? { multiline } : {})}
        value={inputValue}
        placeholder={placeholder}
        name={inputName}
        type={inputType}
        {...(inputType === "file" ? { accept: fileType, multiple: true } : {})}
        onChange={(e) => {
          handleInputChange(
            inputName,
            inputName === "email"
              ? e.target.value.toLowerCase()
              : e.target.value
          );
        }}
        className={`${
          inputType === "file" && "opacity-0"
        } z-10 border-[1px] shadow shadow-zinc-300 text-black font-poppins text-base placeholder:font-poppins ${
          error
            ? "border-red-400 bg-red-50"
            : "border-[#EDEFF3] bg-white focus:border-[#66B600]"
        } h-[45px] rounded-[8px] ${padding}`}
      />
      {icon && <div className="absolute right-[10px] top-[10px]">{icon}</div>}
      <p
        className={`text-red-400 text-xs font-poppins mt-1 ${
          error && error !== "ref" ? "block" : "hidden"
        }`}
      >
        {error}
      </p>
    </div>
  );
};

const FileInput = ({
  inputName,
  inputValue,
  handleInputChange,
  placeholder,
  error,
  icon = null,
  width = "w-auto",
  height,
  padding = "px-4",
  margin = "mb-3",
  title = "",
  titleSize = "text-xs",
  titleColor = "text-zinc-400",
  titleFontWeight = "font-regular",
  fileType = "",
}) => {
  const [fileNames, setFileNames] = useState("");

  return (
    <div className="flex flex-col">
      {title && (
        <p className={`${titleSize} ${titleColor} ${titleFontWeight} mb-1`}>
          {title}
        </p>
      )}
      <div
        className={`relative border-[1px] shadow shadow-zinc-300 text-black font-poppins text-base placeholder:font-poppins ${
          error
            ? "border-red-400 bg-red-50"
            : "border-[#EDEFF3] bg-white focus:border-[#66B600]"
        } h-[45px] rounded-[8px]`}
      >
        <input
          style={{ height: height ? height : 45 }}
          value={inputValue}
          placeholder={placeholder}
          name={inputName}
          type="file"
          accept={fileType}
          multiple
          onChange={(e) => {
            handleInputChange(inputName, e.target.value);
            setFileNames(e.target.value);
          }}
          className={`opacity-0 z-10 ${padding}`}
        />

        <p
          className={`${
            fileNames ? "text-black" : "text-zinc-400"
          } text-sm absolute pointer-events-none left-4 top-3`}
        >
          {fileNames ? fileNames : placeholder}
        </p>

        {icon && <div className="absolute right-[10px] top-[10px]">{icon}</div>}
      </div>

      <p
        className={`text-red-400 text-xs font-poppins mt-1 ${
          error && error !== "ref" ? "block" : "hidden"
        }`}
      >
        {error}
      </p>
    </div>
  );
};

const PasswordInput = ({
  inputName,
  inputValue,
  handleInputChange,
  placeholder,
  error,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-auto -z-10 relative mb-3">
      <input
        value={inputValue}
        placeholder={placeholder}
        name={inputName}
        // placeholderTextColor={error ? "#FF3115" : "#757575"}
        type={isPasswordVisible ? "text" : "password"}
        onChange={(value) => handleInputChange(inputName, value)}
        className={`border-[1px] shadow shadow-zinc-300 text-black py-[10px] font-poppins text-base placeholder:font-poppins ${
          error
            ? "border-red-400 bg-red-50"
            : "border-[#EDEFF3] bg-white focus:border-[#66B600]"
        } h-[45px] rounded-[8px] px-4`}
      />
      <div className={`absolute top-[10px] right-[10px]`}>
        <button
          onPress={() => {
            setPasswordVisible(!isPasswordVisible);
          }}
        >
          {!isPasswordVisible ? <Icons.EyeOpen /> : <Icons.EyeClosed />}
        </button>
      </div>

      <p
        className={`text-red-400 text-xs font-poppins mt-1 ${
          error ? "block" : "hidden"
        }`}
      >
        {error}
      </p>
    </div>
  );
};

const Select = ({
  inputName,
  disabled = false,
  width = "w-auto",
  height = "h-[44px]",
  options = [],
  handleInputChange,
  placeholder = "---",
  margin,
  padding,
  textAlign = "text-left",
  textColor,
  error,
  title = "",
  titleSize = "text-xs",
  titleColor = "text-zinc-400",
  titleFontWeight = "font-regular",
}) => {
  return (
    <div className="flex flex-col">
      {title && (
        <p className={`${titleSize} ${titleColor} ${titleFontWeight} mb-1`}>
          {title}
        </p>
      )}
      <select
        onChange={(e) => {
          handleInputChange(inputName, e.target.value);
        }}
        disabled={disabled}
        className={`z-10 ${width} ${height} ${margin} ${
          error ? "border-[1px] border-red-400 bg-red-50" : "bg-white"
        }  shadow shadow-zinc-300 rounded-[8px]`}
      >
        {options.map((option) => (
          <option
            className={`text-[#868782] text-base font-poppins text-center p-2 border-b-[1px] border-zinc-200`}
          >
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p
          className={`w-full ${
            error ? "text-[#FF3115]" : "text-[#868782]"
          } text-base leading-[45px] px-3 font-poppins ${textAlign}`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

const CustomComponents = {
  Input: Input,
  PasswordInput: PasswordInput,
  FileInput: FileInput,
  Select: Select,
};

export default CustomComponents;
