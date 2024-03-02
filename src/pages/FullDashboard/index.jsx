import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading, Input, SelectBox, CheckBox } from "../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FullDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Project</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[159px] gap-14 bg-gray-900">
        <header className="flex justify-center items-center w-full p-[11px] bg-blue_gray-800">
          <div className="flex flex-row justify-center w-full mx-auto max-w-[1196px]">
            <div className="flex flex-row justify-center items-center w-full gap-[25px]">
              <div className="flex flex-row justify-start w-[94%] mt-[5px]">
                <div className="flex flex-col items-end justify-start w-full">
                  <Img src="images/img_group_83223.svg" alt="image" className="h-12 mr-[237px] z-[1]" />
                  <div className="flex flex-row justify-between items-start w-full mt-[-40px]">
                    <div className="flex flex-row justify-center mt-1.5">
                      <Text size="2xl" as="p" className="!font-roboto">
                        Jobs
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[63%]">
                      <div className="flex flex-row justify-center ">
                        <Input className= "text-white"/>
                  
                        
                      </div>
                      <Img src="images/img_group_83512.svg" alt="image_one" className="h-8" />
                      <Button size="sm" shape="square" className="w-[45px]">
                        <Img src="images/img_group_83219.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Button size="md" shape="square" className="w-[51px]">
                <Img src="images/img_frame_3.svg" />
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full max-w-[1283px]">
          <div className="flex flex-row justify-start items-start w-full gap-[33px]">
            <div className="flex flex-col items-center justify-start w-[27%] mt-3">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-center w-full py-[27px] border-gray-900_02 border-2 border-solid bg-gray-900_02 shadow-bs rounded-[22px]">
                  <div className="flex flex-col items-center justify-start w-full mb-[3px] gap-[7px]">
                    <div className="flex flex-row justify-between items-center w-[84%]">
                      <Text size="xl" as="p" className="!text-gray-200">
                        Filter by
                      </Text>
                      <div className="flex flex-row justify-start gap-[7px]">
                        <Text size="xs" as="p" className="mb-px !text-white-A700 tracking-[0.12px] text-center">
                          3 filters applied.
                        </Text>
                        <a href="#">
                          <Text size="xs" as="p" className="!text-white-A700 tracking-[0.12px] text-center underline">
                            Clear all
                          </Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img src="images/img_line_copy_14.svg" alt="linecopyfourtee" className="h-px" />
                      <div className="flex flex-col items-start justify-start w-[86%] mt-5">
                        <Text as="p" className="!text-gray-200 tracking-[0.16px]">
                          Company
                        </Text>
                        <div className="flex flex-col items-start justify-start w-full mt-[3px] gap-[3px]">
                          <Img src="images/img_arrow_up.svg" alt="arrowup_one" className="h-1.5 ml-[280px]" />
                          <CheckBox name="amazon" label="Amazon" className="gap-3.5 text-left" />
                        </div>
                        <CheckBox name="cvs health" label="CVS Health" className="mt-3 gap-3.5 text-left" />
                        <CheckBox name="toyota" label="Toyota" className="mt-3 gap-3.5 text-left" />
                        <CheckBox
                          color="white_A700"
                          variant="fill"
                          name="apple"
                          label="Apple"
                          className="mt-[11px] text-left"
                        />
                      </div>
                      <div className="h-px w-full mt-[18px] bg-blue_gray-900_01" />
                      <div className="flex flex-row justify-between items-center w-[86%] mt-[67px]">
                        <Text as="p" className="!text-gray-200 tracking-[0.16px]">
                          Location
                        </Text>
                        <Img src="images/img_arrow_up.svg" alt="arrowup_three" className="h-1.5" />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full mt-[19px]">
                        <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                          <div className="flex flex-col items-start justify-start ml-[27px] gap-4">
                            <CheckBox size="sm" name="mumbai" label="Mumbai" className="gap-[15px] text-left" />
                            <CheckBox size="sm" name="chandigarh" label="Chandigarh" className="gap-[15px] text-left" />
                          </div>
                          <div className="flex flex-col items-start justify-start w-full pt-0.5 px-0.5">
                            <CheckBox
                              size="sm"
                              name="karnataka"
                              label="Karnataka"
                              className="ml-6 gap-[15px] text-left"
                            />
                            <CheckBox
                              size="sm"
                              variant="fill"
                              name="banglore"
                              label="Banglore"
                              className="mt-4 ml-6 text-left"
                            />
                            <div className="flex flex-row justify-between items-center w-[87%] mt-[53px] ml-6">
                              <Text as="p" className="!text-gray-200 tracking-[0.16px]">
                                Date Posted
                              </Text>
                              <Img src="images/img_arrow_up.svg" alt="arrowup_five" className="h-1.5" />
                            </div>
                            <CheckBox
                              size="sm"
                              name="last24hours"
                              label="Last 24 hours"
                              className="mt-[19px] ml-6 gap-[15px] text-left"
                            />
                            <CheckBox
                              size="sm"
                              name="last48hours"
                              label="Last 48 hours"
                              className="mt-4 ml-6 gap-[15px] text-left"
                            />
                            <CheckBox
                              size="sm"
                              name="last7days"
                              label="Last 7 days"
                              className="mt-4 ml-6 gap-[15px] text-left"
                            />
                            <CheckBox
                              size="sm"
                              name="last14days"
                              label="Last 14 days"
                              className="mt-4 ml-6 text-left"
                            />
                            <CheckBox
                              size="sm"
                              name="lastmonth"
                              label="Last month
"
                              className="mt-4 ml-6 gap-[15px] text-left"
                            />
                            <div className="flex flex-row justify-center w-[87%] mt-[42px] ml-6">
                              <div className="flex flex-col items-start justify-start w-full gap-4">
                                <div className="flex flex-row justify-between items-start w-full">
                                  <Text as="p" className="!text-gray-200 tracking-[0.16px]">
                                    Salary Range
                                  </Text>
                                  <Img src="images/img_arrow_up.svg" alt="arrowup_seven" className="h-1.5 mt-[5px]" />
                                </div>
                                <CheckBox
                                  size="sm"
                                  name="3lakh"
                                  label="3 Lakh+
"
                                  className="gap-[15px] text-left"
                                />
                                <CheckBox
                                  size="sm"
                                  name="6lakh"
                                  label="6 Lakh+
"
                                  className="gap-[15px] text-left"
                                />
                                <CheckBox
                                  size="sm"
                                  name="10lakh"
                                  label="10 Lakh+
"
                                  className="gap-[15px] text-left"
                                />
                                <CheckBox
                                  color="white_A700"
                                  size="sm"
                                  variant="fill"
                                  name="15lakh"
                                  label="15 Lakh+
"
                                  className="text-left"
                                />
                                <CheckBox
                                  color="white_A700"
                                  size="sm"
                                  variant="fill"
                                  name="25lakh"
                                  label="25 Lakh+
"
                                  className="text-left"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col w-[85%] mt-[50px] ml-[23px] gap-[68px]">
                              <div className="flex flex-row justify-center w-full">
                                <div className="flex flex-col items-start justify-start w-full gap-3">
                                  <div className="flex flex-row justify-between items-start w-full">
                                    <Text as="p" className="!text-gray-200 tracking-[0.16px]">
                                      Skills
                                    </Text>
                                    <Img src="images/img_arrow_up.svg" alt="skills_one" className="h-1.5 mt-[3px]" />
                                  </div>
                                  <CheckBox name="javascript" label="Javascript" className="gap-3.5 text-left" />
                                  <CheckBox
                                    name="machinelearning"
                                    label="Machine learning"
                                    className="gap-3.5 text-left"
                                  />
                                  <CheckBox name="jquery" label="JQuery" className="gap-3.5 text-left" />
                                  <CheckBox
                                    color="white_A700"
                                    variant="fill"
                                    name="artificialintel"
                                    label="Artificial intelligence"
                                    className="text-left"
                                  />
                                </div>
                              </div>
                              <div className="w-px h-px bg-blue_gray-900_01" />
                              <div className="flex flex-row justify-center w-[98%] mr-1.5">
                                <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                                  <div className="flex flex-row justify-between items-start w-full">
                                    <Text as="p" className="!text-gray-200 tracking-[0.16px]">
                                      Experience
                                    </Text>
                                    <Img src="images/img_arrow_up.svg" alt="arrowup_one" className="h-1.5 mt-0.5" />
                                  </div>
                                  <CheckBox name="02years" label="0-2 years" className="gap-3.5 text-left" />
                                  <CheckBox name="35years" label="3-5 years" className="gap-3.5 text-left" />
                                  <CheckBox name="58years" label="5-8 years" className="gap-3.5 text-left" />
                                  <CheckBox
                                    color="white_A700"
                                    variant="fill"
                                    name="above8years"
                                    label="Above 8 years"
                                    className="text-left"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-[84%] mt-[38px] ml-[23px]">
                              <div className="flex flex-col items-start justify-start w-full gap-3">
                                <div className="flex flex-row justify-between items-center w-full">
                                  <Text as="p" className="!text-gray-200 tracking-[0.16px]">
                                    Education
                                  </Text>
                                  <Img src="images/img_arrow_up.svg" alt="arrowup_nine" className="h-1.5" />
                                </div>
                                <CheckBox name="bachelors" label="Bachelors" className="gap-3.5 text-left" />
                                <CheckBox name="masters" label="Masters" className="gap-3.5 text-left" />
                                <CheckBox name="phd" label="Phd" className="gap-3.5 text-left" />
                                <CheckBox
                                  color="white_A700"
                                  variant="fill"
                                  name="diploma"
                                  label="Diploma"
                                  className="text-left"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[71%] gap-[37px]">
              <div className="flex flex-row justify-between items-center w-full">
                <Text size="xl" as="p" className="!text-gray-100_cc">
                  <span className="text-gray-100_cc tracking-[0.40px] font-extrabold">SEARCH RESULTS</span>
                  <span className="text-gray-100_cc font-extrabold">/</span>
                  <span className="text-gray-100_cc">JOBS - 2049 results</span>
                </Text>
                <div className="flex flex-row justify-start items-center w-[21%] gap-[27px]">
                  <Text as="p" className="!text-gray-400 tracking-[0.32px]">
                    Sort by{" "}
                  </Text>
                  <SelectBox
                    indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                    name="latest"
                    placeholder="Latest"
                    options={dropDownOptions}
                    className="w-[58%] gap-px tracking-[0.32px] font-semibold border-gray-200 border border-solid"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-6 p-7 bg-gray-900_01 rounded-[10px]">
                <Input
                  color="blue_gray_600_blue_gray_600_00"
                  name="jobs_one"
                  placeholder="Jobs"
                  className="w-[77%] mt-[3px] ml-1"
                />
                <div className="flex flex-col w-full mb-7 ml-1 pt-[228px] gap-6">
                  <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-6 bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-row justify-center w-[94%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="image" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h1" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <Heading size="xs" as="h2" className="!text-[16.97px]">
                            Skill match
                          </Heading>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h3"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                      <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                        Posted 1 day ago • 10 applicants
                      </Text>
                      <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                        <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                        <Img src="images/img_vector.svg" alt="image_one" className="h-7 opacity-0.4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full pt-[22px] bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-col items-center justify-start w-full gap-6">
                      <div className="flex flex-row justify-between items-center w-[94%]">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="appletwo_one" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h4" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <span className="text-gray-100_cc font-extrabold">/</span>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h6"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                        <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                          Posted 1 day ago • 10 applicants
                        </Text>
                        <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                          <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                          <Img src="images/img_vector.svg" alt="vector_one" className="h-7 opacity-0.4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-6 bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-row justify-center w-[94%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="appletwo_one" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h5" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <Heading size="xs" as="h6" className="!text-[16.97px]">
                            Skill match
                          </Heading>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h5"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                      <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                        Posted 1 day ago • 10 applicants
                      </Text>
                      <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                        <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                        <Img src="images/img_vector.svg" alt="vector_one" className="h-7 opacity-0.4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-6 bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-row justify-center w-[94%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="appletwo_one" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h5" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <Heading size="xs" as="h6" className="!text-[16.97px]">
                            Skill match
                          </Heading>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h5"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                      <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                        Posted 1 day ago • 10 applicants
                      </Text>
                      <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                        <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                        <Img src="images/img_vector.svg" alt="vector_one" className="h-7 opacity-0.4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-6 bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-row justify-center w-[94%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="appletwo_one" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h5" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <Heading size="xs" as="h6" className="!text-[16.97px]">
                            Skill match
                          </Heading>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h5"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                      <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                        Posted 1 day ago • 10 applicants
                      </Text>
                      <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                        <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                        <Img src="images/img_vector.svg" alt="vector_one" className="h-7 opacity-0.4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-6 bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-row justify-center w-[94%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="appletwo_one" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h5" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <Heading size="xs" as="h6" className="!text-[16.97px]">
                            Skill match
                          </Heading>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h5"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                      <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                        Posted 1 day ago • 10 applicants
                      </Text>
                      <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                        <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                        <Img src="images/img_vector.svg" alt="vector_one" className="h-7 opacity-0.4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-6 bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-row justify-center w-[94%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="appletwo_one" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h5" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <Heading size="xs" as="h6" className="!text-[16.97px]">
                            Skill match
                          </Heading>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h5"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                      <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                        Posted 1 day ago • 10 applicants
                      </Text>
                      <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                        <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                        <Img src="images/img_vector.svg" alt="vector_one" className="h-7 opacity-0.4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-6 bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-row justify-center w-[94%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="appletwo_one" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h5" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <Heading size="xs" as="h6" className="!text-[16.97px]">
                            Skill match
                          </Heading>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h5"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                      <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                        Posted 1 day ago • 10 applicants
                      </Text>
                      <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                        <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                        <Img src="images/img_vector.svg" alt="vector_one" className="h-7 opacity-0.4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-[22px] gap-6 bg-blue_gray-800_01 rounded-[13px]">
                    <div className="flex flex-row justify-center w-[94%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-between items-center w-[39%]">
                          <div className="flex flex-col items-center justify-start h-20 w-20">
                            <div className="flex flex-col items-center justify-center h-20 w-20 p-[13px] bg-white-A700 rounded-[18px]">
                              <Img src="images/img_apple_2.png" alt="appletwo_one" className="w-[84%] object-cover" />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-2">
                            <Heading as="h5" className="!text-blue-50">
                              Junior Art Assistant
                            </Heading>
                            <Text as="p">
                              Apple Incorporations
                              <br />
                              Mumbai, Maharashtra, India
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[23%] gap-6">
                          <Heading size="xs" as="h6" className="!text-[16.97px]">
                            Skill match
                          </Heading>
                          <div className="h-[71px] w-[71px] relative">
                            <Heading
                              as="h5"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto uppercase text-center !font-semibold absolute"
                            >
                              78%
                            </Heading>
                            <CircularProgressbar
                              value={68}
                              styles={{
                                trail: { strokeWidth: 48 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(248deg)",
                                  strokeWidth: 4,
                                },
                              }}
                              className="justify-center h-[71px] w-[71px] left-0 bottom-0 right-0 top-0 m-auto border-pink-500 border border-solid absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full p-[19px] rounded-bl-[14px] rounded-br-[14px] bg-blue_gray-600_66">
                      <Text size="s" as="p" className="ml-[9px] !text-[15.53px]">
                        Posted 1 day ago • 10 applicants
                      </Text>
                      <div className="flex flex-row justify-start items-center mr-3.5 gap-6">
                        <Button className="tracking-[1.29px] uppercase font-semibold min-w-[170px]">Apply now</Button>
                        <Img src="images/img_vector.svg" alt="vector_one" className="h-7 opacity-0.4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
