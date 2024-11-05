vcpkg_from_gitlab(
  GITLAB_URL https://gitlab.com
  OUT_SOURCE_PATH SOURCE_PATH
  REPO graphviz/graphviz
  REF "${VERSION}"
  SHA512 34706c23416fdd8bedcadf5ae501e66892016034baa6603e69665ca1582db0eddf7731d5aae347ae985e12cc0f96f4c2887d474231f71755813520f0c6e5a5f2
  HEAD_REF main
)

file(COPY ${CMAKE_CURRENT_LIST_DIR}/CMakeLists.txt DESTINATION ${SOURCE_PATH})
# file(COPY ${CMAKE_CURRENT_LIST_DIR}/lib DESTINATION "${SOURCE_PATH}/lib")

vcpkg_cmake_configure(
    SOURCE_PATH "${SOURCE_PATH}"
    OPTIONS
        -DENABLE_LTDL=OFF
        -DWITH_EXPAT=ON
        -DWITH_GVEDIT=OFF
        -WITH_SMYRNA=OFF
        -DWITH_ZLIB=OFF
        -Duse_win_pre_inst_libs=OFF
        -DBUILD_SHARED_LIBS=OFF
        -DENABLE_TCL=OFF
        -DENABLE_SWIG=OFF
        -DENABLE_SHARP=OFF
        -DENABLE_D=OFF
        -DENABLE_GO=OFF
        -DENABLE_JAVASCRIPT=OFF
        -DGRAPHVIZ_CLI=OFF
)
vcpkg_cmake_install()
# vcpkg_cmake_config_fixup(PACKAGE_NAME "graphviz" CONFIG_PATH "share/cmake/graphviz")

file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/debug/include")
file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/debug/share")
file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/debug/lib/pkgconfig")
file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/lib/pkgconfig")

file(INSTALL "${SOURCE_PATH}/LICENSE" DESTINATION "${CURRENT_PACKAGES_DIR}/share/${PORT}" RENAME copyright)
